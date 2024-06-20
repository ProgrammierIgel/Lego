import { defekt } from 'defekt';

class NotImplemented extends defekt({ code: 'NotImplemented' }) {}
class IncorrectDataRequest extends defekt({ code: 'IncorrectDataRequest' }) {}
class MotorError extends defekt({ code: 'MotorError' }) {}

export { IncorrectDataRequest, MotorError, NotImplemented };
