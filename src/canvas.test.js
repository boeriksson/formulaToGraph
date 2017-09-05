import {
    initCtx,
    decorateYAxis
} from './canvas';

let ctxMock;
let mockMoveTo;
let mockLineTo


describe('#decorateYAxis', () => {
    beforeEach(() => {
        mockMoveTo = jest.fn();
        mockLineTo = jest.fn();
        ctxMock = {
            moveTo: mockMoveTo,
            lineTo: mockLineTo
        };
        initCtx(ctxMock);
    });
    test('happy neutral case', () => {
        decorateYAxis({ left: -10, right: 10, top: 10, bottom: -10}, 400);
        console.log('mockMoveTo.mock.calls', mockMoveTo.mock.calls);
        console.log('mockLineTo.mock.calls', mockLineTo.mock.calls);
    })
});
