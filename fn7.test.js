const mockFn = jest.fn();

mockFn(10, 20);
mockFn();
mockFn(30, 40);

test('한번 이상 호출되었나?', () => {
    expect(mockFn).toBeCalled();
});

test('정확히 3번 호출되었나?', () => {
    expect(mockFn).toBeCalledTimes(3);
});

test('10 이랑 20 전달받은 mockFn 함수가 있나?', () => {
    expect(mockFn).toBeCalledWith(10, 20);
});

test('마지막 mockFn 함수는 30 이랑 40 을 전달받았는가?', () => {
    expect(mockFn).lastCalledWith(30, 40);
});