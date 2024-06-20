import { defekt } from 'defekt';

class IncorrectDataRequest extends defekt({ code: 'IncorrectDataRequest' }) {}
class MotorError extends defekt({ code: 'MotorError' }) {}

export { IncorrectDataRequest, MotorError };
