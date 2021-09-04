import { ErrorsInterceptor } from './exception.interceptor';

describe('ExceptionInterceptor', () => {
  it('should be defined', () => {
    expect(new ErrorsInterceptor()).toBeDefined();
  });
});
