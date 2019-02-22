export default {
    props: {
        stock: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            quantity: 0,
        };
    },
};
