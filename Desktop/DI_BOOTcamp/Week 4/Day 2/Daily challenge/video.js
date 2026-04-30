
// 1. Create the Video class
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    // 2. Method to watch the video
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

// 3. Instantiate first Video
const video1 = new Video("JavaScript Basics", "John Doe", 1250);
video1.watch();

// 4. Instantiate second Video
const video2 = new Video("React Tutorial", "Sarah Smith", 3400);
video2.watch();

// ====================== BONUS ======================

console.log("\n--- BONUS: Array of Videos ---");

// 5. Array of video data (best structure: array of objects)
const videoData = [
    { title: "HTML Crash Course", uploader: "Mike Chen", time: 1800 },
    { title: "CSS Flexbox Masterclass", uploader: "Emma Watson", time: 2400 },
    { title: "Python for Beginners", uploader: "David Kim", time: 3600 },
    { title: "Node.js Backend", uploader: "Lisa Park", time: 4200 },
    { title: "Machine Learning Intro", uploader: "Alex Rivera", time: 5100 }
];

// 6. Loop through the array and instantiate Video objects
const videos = videoData.map(data => {
    const video = new Video(data.title, data.uploader, data.time);
    video.watch();   // Call watch() immediately
    return video;
});

console.log("\nAll videos created successfully!");
console.log(`Total videos: ${videos.length}`);