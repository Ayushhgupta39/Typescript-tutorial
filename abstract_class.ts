abstract class TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string 
    ) {}

    abstract get Sepia(): void
    getReelTime(): number {
        // Calculation
        return 8
    }
}


class Instagram extends TakePhoto {
    constructor (public cameraMode: string,
        public filter: string,
        public burst: number
        ) {
            super (cameraMode, filter)
        }

        getSepia(): void {
        
        }
}

// const ayush = new Instagram("test", "a");