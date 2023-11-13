const { createApp } = Vue

const app = createApp({
    data() {
        return {
            name: "Riccardo",
            img: "https://sfondo.info/i/original/c/f/7/65457.jpg",
        };
    },
})

app.mount("#app");