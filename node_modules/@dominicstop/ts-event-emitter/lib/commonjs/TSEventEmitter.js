"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSEventEmitter = void 0;
/**
 * ```
 * // 1. Create a string enum...
 * enum Events { Foo = 'Foo', Bar = 'Bar', Baz = 'Baz' };
 *
 * // 1.1. ...or a union of strings (whichever you prefer).
 * type EventKeys = 'Foo' | 'Bar' | 'Baz';
 *
 * // 2. Create the emitter + event map...
 * // * For each key in the event enum, create a map that defines
 * //   the type of event param. the event listener will receive.
 * // * As mentioned in 1.1. you can also use the `EventKeys` union
 * //   in place of the `Events` enum.
 * export const emitter: TSEventEmitter<EventKeys, {
 *   // 2.1. For the event `TestEnum.Foo`, this will be its event object.
 *   Foo: { name: string },
 *
 *   // 2.2. If you don't want to pass an event argument,
 *   // then set it to `null` or `undefined`.
 *   // * This means the event listener won't receive any arguments
 *   //   and you can't pass a data argument to `emit` (see step 4.2.)
 *   Bar: null,
 *
 *   // 2.3. alt. you can make the event param optional.
 *   Baz: null | { age: number }
 * }> = new TSEventEmitter();
 *
 * // 3.1. `event` will be inferred as `(event: { name: string }) => void`
 * emitter.once('Foo', (event) => { console.log(event.name) });
 *
 * // 3.2.`event` will be inferred as `() => void`
 * // * Note: If you try to add an event param, TS produces an error.
 * emitter.once('Bar', () => {});
 *
 * // 3.3. `event` will be inferred as
 * //      `(event: { age: number } | null) => void`
 * // * As such, we need to use the optional operator to access `event`.
 * // * Note: If preferred, you can also use the enum key directly.
 * emitter.once(Events.Baz, (event) => { console.log(event?.age) });
 *
 * // 4. Next, lets broadcast some events...
 * emitter.emit(Events.Foo, { name: 'd'});
 * emitter.emit('Baz', { age: 1 });
 *
 * // 4.1. You can't pass a data argument with the 'Bar' event
 * // * i.e. because of step 2.2., event is defined as `null`.
 * emitter.emit('Bar');
 *
 * // 4.2. We must explicitly pass a null/undefined value for the data
 * // argument since it can be optional (e.g. step 2.3.)
 * emitter.emit('Baz', null);
 * ```
 */
var TSEventEmitter = /** @class */ (function () {
    function TSEventEmitter() {
        // Properties
        /** Store the event listeners */
        this.listeners = {};
    }
    TSEventEmitter.prototype.addListener = function (eventKey, listener) {
        var _this = this;
        var hasListener = this.listeners[eventKey] != null;
        if (!hasListener) {
            // initialize with empty array...
            // The array will be used to store the event listeners
            this.listeners[eventKey] = [];
        }
        ;
        this.listeners[eventKey].push(listener);
        return {
            unsubscribe: function () {
                _this.removeListener(eventKey, listener);
            }
        };
    };
    ;
    TSEventEmitter.prototype.removeListener = function (eventKey, listenerToRemove) {
        var hasListener = this.listeners[eventKey] != null;
        // event does not exist (maybe: throw an error?)
        if (!hasListener)
            return;
        this.listeners[eventKey] = this.listeners[eventKey].filter(function (listener) { return (listener !== listenerToRemove); });
    };
    ;
    TSEventEmitter.prototype.once = function (eventKey, listener) {
        var _this = this;
        var tempListener = function (data) {
            listener(data);
            _this.removeListener(eventKey, tempListener);
        };
        this.addListener(eventKey, tempListener);
        return {
            unsubscribe: function () {
                _this.removeListener(eventKey, tempListener);
            }
        };
    };
    ;
    TSEventEmitter.prototype.removeAllListeners = function () {
        this.listeners = {};
    };
    ;
    TSEventEmitter.prototype.emit = function (eventKey) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var hasListener = this.listeners[eventKey] != null;
        // event does not exist
        if (!hasListener)
            return;
        this.listeners[eventKey].forEach(function (callback) {
            callback(data[0]);
        });
    };
    ;
    return TSEventEmitter;
}());
exports.TSEventEmitter = TSEventEmitter;
;
