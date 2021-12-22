export function addToCart(product){
    return {
        type: '@cart/ADD',
        product,
    }
}

export function removeFromCart(id) {
    return {
        type: '@cart/REMOVE',
        id,
    }
}

export function updateAmmount(id, amount) {
    return {
        typeof: '@cart/UPDATE_AMOUNT',
        id,
        amount,
    };
}