export class GetDate {
  static currentDate() {
    var today = new Date();
    return (
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    );
  }

  static currentTime() {
    var today = new Date();
    return (
      today.getHours() +
      ":" +
      (today.getMinutes() < 10 ? "0" : "") +
      today.getMinutes() +
      ":" +
      today.getSeconds()
    );
  }
}
