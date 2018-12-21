import * as R from 'ramda';

const MSGS = {
	BILL_AMOUNT_MSG: 'BILL_AMOUNT_MSG',
	TIP_PERCENT_MSG: 'TIP_PERCENT_MSG'
}

export function billAmountInputMsg(billAmount) {
	return {
		type: MSGS.BILL_AMOUNT_MSG,
		billAmount
	};
};

export function tipPercentInputMsg(tipPercentage) {
	return {
		type: MSGS.TIP_PERCENT_MSG,
		tipPercentage
	};
};


function update(msg, model) {
	switch (msg.type) {
		case MSGS.BILL_AMOUNT_MSG: {
			const { billAmount } = msg;
			return { ...model, billAmount }
		};
		case MSGS.TIP_PERCENT_MSG: {
			const { tipPercentage } = msg;
			return { ...model, tipPercentage }
		};
	};
	return model;
}

export default update;
