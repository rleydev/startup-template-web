
export class Performance {

    measureFetchAndSend() {
        const fetchCommunityStart = performance.now();
        fetch('http://localhost:3000/community').then(() => {
            const fetchCommunityEnd = performance.now();
            const fetchTime = fetchCommunityEnd - fetchCommunityStart;
            // console.log(`Fetching community section took ${fetchCommunityTime} milliseconds`);
            const pageLoadTime = this.measurePageLoadSpeed()
            const memoryUsage = this.measurePageMemoryUsage()
            
            const performanceMetrics = {
                fetchTime,
                pageLoadTime,
                memoryUsage
            };

            console.log(performanceMetrics)

            fetch('http://localhost:3000/analytics/performance', {
                method: 'POST',
                body: JSON.stringify(performanceMetrics),
                headers: {
                'Content-Type': 'application/json'
                    }
            }).then(response => {
                console.log('Performance metrics sent to server with response - ' + response.statusText);
            }).catch(error => {
                console.error('Error sending performance metrics to server:', error);
            }); 
        }).catch(e => {
            console.log(`error while fetching community for analytics error - ${e}`)
        })
    }

    measurePageMemoryUsage() {
        let usage
        if ('memory' in window.performance) {
            const memoryUsage = performance.memory.usedJSHeapSize;
            console.log(`Memory usage: ${memoryUsage} bytes`);
            usage = memoryUsage
        }
        return usage
    }

    measurePageLoadSpeed() {
        const pageLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page load time: ${pageLoadTime} milliseconds`);
        return pageLoadTime
    }

}