import { DataFetcher } from './components/DataFetcher';
import { fetchRecipes } from './api/api';
import type { RecipeItem } from './types/types';

export default function App() {
  return (
    <main className="app-shell">
      <header className="hero-card">
        <p className="eyebrow">React + TypeScript + Redux</p>
        <h1>Generic Recipe Data Fetcher</h1>
        <p className="lead">
          This demo uses a generic fetching component and Redux state to load recipe data from an API.
        </p>
      </header>

      <DataFetcher<RecipeItem>
        title="Recipe Gallery"
        fetcher={fetchRecipes}
        emptyText="No recipes were found."
        renderItem={(recipe) => (
          <>
            {recipe.image ? <img src={recipe.image} alt={recipe.title} className="recipe-image" /> : null}
            <h3>{recipe.title}</h3>
            <p className="meta">Ready in {recipe.readyInMinutes ?? '—'} minutes</p>
            <p>{recipe.summary?.replace(/<[^>]+>/g, ' ').slice(0, 120) ?? 'A great recipe to try.'}</p>
          </>
        )}
      />
    </main>
  );
}
