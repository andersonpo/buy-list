const constants = {
  BRAZIL: 'BR',
  UNITED_STATES: 'USA',
};

class DateHelper {
  DateNow = (): string => {
    return new Date(Date.now()).toISOString();
  };

  formatDate = (date: Date, format: string): string => {
    let dateFormated: string = format;

    // Date
    const day = ('0' + date.getDate().toString()).slice(-2);
    const month = ('0' + (date.getMonth() + 1).toString()).slice(-2);
    const year = date.getFullYear().toString();

    dateFormated = dateFormated.replace('dd', day);
    dateFormated = dateFormated.replace('d', date.getDate().toString());

    dateFormated = dateFormated.replace('mm', month);
    dateFormated = dateFormated.replace('m', (date.getMonth() + 1).toString());

    dateFormated = dateFormated.replace('yyyy', year);
    dateFormated = dateFormated.replace('yy', year.slice(-2));

    // Time
    const hour = ('0' + date.getHours().toString()).slice(-2);
    const minutes = ('0' + date.getMinutes().toString()).slice(-2);
    const seconds = ('0' + date.getSeconds().toString()).slice(-2);

    dateFormated = dateFormated.replace('HH', hour);
    dateFormated = dateFormated.replace('hh', hour);
    dateFormated = dateFormated.replace('MM', minutes);
    dateFormated = dateFormated.replace('ss', seconds);

    return dateFormated;
  };
}

export default DateHelper;
exports = Object.freeze(constants);
