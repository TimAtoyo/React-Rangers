const formatRating = (rating) => {
    return (parseFloat(rating) * 10).toFixed(1) + '%';
};

export default formatRating;