class DateDisplay {
    constructor(element) {
        this.element = element
        this.render()
        this.startInterval()
    }

    startInterval() {
        setInterval(this.render.bind(this), 50)
    }

    render() {
        const date = new Date();

        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);

        this.element.textContent = [
            date.getFullYear(),
            month,
            day
        ].join('-');
    }
}

export { DateDisplay }
