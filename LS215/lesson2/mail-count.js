/*
Input: string
Output: string
Rules
- build a function that parses a string of email data, the function takes an argument that contains the
data parses it, then produces two basic statistics about the email:
  - the number of email messages found in the string
  - the date range of the email messages
- the email messages string has the following characteristics:
  - the string contains multiple email messages separated by the delimiter string ##||##
  - each email message has five parts. The delimiter string #/# separates the parts
  - the five parts:
    - sender, subject, date, recipient, body
  - all five parts occur in the sequence shown above
*/
// My Solution
var emailData = "From: foo@bar.com#/#\nSubject: Nunc in justo eros. Aliquam.#/#\nDate: 07-27-2016#/#\nTo: foo@bar.com#/#\nEtiam convallis commodo tortor, dapibus auctor dolor semper consequat. Sed lobortis eros nec ante porta, eu placerat sapien interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consectetur et odio vitae volutpat. Curabitur imperdiet orci metus, et dignissim nisl lacinia non. Aenean volutpat diam in lorem iaculis, sit amet volutpat nibh dictum. Quisque vel vulputate nisi. Nam a vestibulum turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum leo id velit aliquet, at vestibulum ipsum molestie. Cras eu lobortis libero. In rutrum non leo id ultricies. Aliquam in ex ut nibh placerat sollicitudin vitae id magna.##||##\n\nFrom: baz@foo.com#/#\nSubject: Aenean cursus velit non arcu.#/#\nDate: 08-11-2016#/#\nTo: baz@foo.com#/#\nCras ex leo, faucibus id mollis a, dignissim sit amet metus. Sed dui massa, mollis in tristique ut, auctor quis tortor. Donec egestas velit purus, eget laoreet urna venenatis id. Etiam eget ultrices tortor. Duis venenatis leo mi, non porta est molestie at. Nulla lacus nisl, dapibus convallis massa ut, dignissim euismod lacus. Ut vel magna lectus. Morbi sit amet vulputate arcu. Cras non ante arcu. Nam tempor iaculis ipsum eget tincidunt. Praesent imperdiet varius dui, vel egestas ipsum porta in. Sed suscipit massa in neque lobortis congue.##||##\n\nFrom: qux@bar.com#/#\nSubject: Sed hendrerit felis in ex.#/#\nDate: 06-25-2016#/#\nTo: qux@bar.com#/#\nNulla quis est vitae orci tincidunt convallis sit amet ut libero. Sed eu facilisis justo. Maecenas sed ultrices urna. Sed malesuada justo sed magna sodales, eget congue dolor convallis. Vestibulum vel consectetur nunc. Morbi at tincidunt turpis, eget imperdiet orci. Curabitur laoreet ipsum a quam facilisis, eu aliquet lectus viverra. Maecenas ullamcorper rutrum dui, ac aliquet mi pulvinar sit amet.##||##\n\nFrom: quux@foo.com#/#\nSubject: Curabitur tincidunt elit nec risus.#/#\nDate: 07-24-2016#/#\nTo: quux@foo.com#/#\nCurabitur interdum dictum consectetur. Nulla facilisi. Quisque sed tellus consectetur, vestibulum quam sed, lacinia mauris. Nunc risus dolor, feugiat nec erat at, elementum tempor urna. Vivamus facilisis elementum congue. Cras dui libero, vehicula eget porttitor sed, sagittis quis dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam lacinia nulla nisi, vel finibus ligula sodales quis. Maecenas vulputate, leo auctor venenatis pretium, lectus elit eleifend odio, nec molestie ligula ex eget tellus. Nullam a nibh ut enim efficitur elementum. Nunc non elit vitae tortor iaculis ornare in id risus. Integer finibus lobortis lorem, id rutrum elit congue id. In hac habitasse platea dictumst.##||##\n\nFrom: garply@foo.com#/#\nSubject: Integer nec nunc facilisis, ultricies.#/#\nDate: 07-03-2016#/#\nTo: garply@foo.com#/#\nFusce rhoncus purus nisi, vel blandit felis fermentum sed. Vestibulum ultricies rutrum dui nec vehicula. Proin quis semper nulla. Maecenas congue, leo nec feugiat dapibus, dui metus facilisis elit, non finibus leo nisl at est. Donec varius, turpis non pulvinar sodales, nulla nulla posuere ligula, nec eleifend quam metus ut tortor. Sed semper vestibulum mattis. Nullam et ornare eros. Aliquam sed pellentesque dui, ut consequat neque. Integer luctus turpis ultrices, congue erat mattis, vehicula tellus. Pellentesque tincidunt posuere nibh pretium tincidunt. In hac habitasse platea dictumst.";

function mailCount(emailData) {
  let emailCount = emailData.split(/##\|\|##/g).length;
  let sortedDates = emailData.match(/date:\s\d\d-\d\d-\d\d\d\d/gi).sort();
  console.log(`Count of Email: ${emailCount}`);
  console.log(`Date Range: ${formatDate(sortedDates[0])} - ${formatDate(sortedDates[sortedDates.length - 1])}`);
}

function formatDate(date) {
  date = date.slice(6);
  date = new Date(date);
  return date.toDateString();
}

// Lesson Solution
function mailCount(emailData) {
  let emails = emailData.split('##||##');
  let count = emails.length;
  let emailDates = emails.map(email => email.split('#/#')[2]);

  console.log('Count of Email: ' + count);
  console.log('Date Range: ' + displayableDateRange(emailDates));
}

function displayableDateRange(dates) {
  let dateObjects = getDateObjects(dates);
  dateObjects.sort((a, b) => a.valueOf() - b.valueOf());
  return dateObjects[0].toDateString() + ' - ' + dateObjects[dateObjects.length - 1].toDateString();
}

function getDateObjects(dates) {
  return dates.map(date => {
    let dateElements = date.split(' ')[1].split('-');
    let month = parseInt(dateElements[0], 10) - 1;
    let day = parseInt(dateElements[1], 10);
    let year = parseInt(dateElements[2], 10);
    return new Date(year, month, day);
  })
}

// Test Cases
mailCount(emailData);

// console output
// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016