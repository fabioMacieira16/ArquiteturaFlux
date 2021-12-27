import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from "../../../services/api";
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmount } from './actions';

function* addToCart({ id }) {
    const productExists = yield select(
        state => state.cart.find(p => p.id === id)
    )

    const stock = yield call(api.get, `/stock/${id}`);

    const stokAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;

    if (amount > stokAmount) {
        console.log('numero de stoke esgotado');
        return;        
    }

    if (productExists) {
        yield put(updateAmount(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        }

        yield put(addToCartSuccess(data));
    }
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    // takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);