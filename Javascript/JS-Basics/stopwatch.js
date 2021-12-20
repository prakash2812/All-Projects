function StopWatch() {
    let startTime, endTime, running = false, duration = 0;

    this.start = function () {
        if (running) {
            throw new Error('Stop watch already started')
        }
        running = true
        startTime = new Date();
    }
    this.stop = function () {
        if (!running) {
            throw new Error('Stop watch already stoped')
        }

        running = false;
        endTime = new Date();
        let second = ((endTime.getTime()) - (startTime.getTime())) / 1000;
        duration += second
    }
    this.reset = function () {
        startTime = null;
        endTime = null
        running = false
        duration = 0
    }
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration
        }
    })
}

const sw = new StopWatch();
sw.start();
sw.stop()
console.log(sw.duration)