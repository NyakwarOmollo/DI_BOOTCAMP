import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { ReactNode } from 'react';
import { fetchFailed, fetchStarted, fetchSuccess } from '../features/dataSlice';
import type { AppDispatch, RootState } from '../app/store';

type DataFetcherProps<T> = {
  title: string;
  fetcher: () => Promise<T[]>;
  renderItem: (item: T, index: number) => ReactNode;
  emptyText?: string;
};

export function DataFetcher<T>({
  title,
  fetcher,
  renderItem,
  emptyText = 'No data available yet.',
}: DataFetcherProps<T>) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    let isCurrent = true;

    const load = async () => {
      dispatch(fetchStarted());

      try {
        const result = await fetcher();

        if (isCurrent) {
          dispatch(fetchSuccess(result as unknown[]));
        }
      } catch (err) {
        if (isCurrent) {
          dispatch(fetchFailed(err instanceof Error ? err.message : 'Unexpected error occurred.'));
        }
      }
    };

    load();

    return () => {
      isCurrent = false;
    };
  }, [dispatch, fetcher]);

  return (
    <section className="card">
      <h2>{title}</h2>
      {loading && <p className="status">Loading recipes…</p>}
      {error && <p className="status error">{error}</p>}

      {!loading && !error && data.length === 0 && <p className="status">{emptyText}</p>}

      <div className="grid">
        {data.map((item, index) => (
          <article key={`${String((item as T & { id?: string | number }).id ?? index)}-${index}`} className="item-card">
            {renderItem(item as T, index)}
          </article>
        ))}
      </div>
    </section>
  );
}
