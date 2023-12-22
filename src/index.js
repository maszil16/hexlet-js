import _ from 'lodash';

export default () => {
    const a = _.last(["one", "two"]);
    return a;
}