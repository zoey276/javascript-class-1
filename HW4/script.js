```javascript
var pageInfo = new Object();

pageInfo.title = 'Case Studies';
pageInfo.description = 'Information about case studies.';
pageInfo.caseStudies = ['Case Study 1', 'Case Study 2'];

pageInfo.caseStudyCount = function() {
    return this.caseStudies.length;
};

console.log('The Case Studies page contains ' + pageInfo.caseStudyCount() + ' case studies.');

pageInfo.caseStudies.push('HSC');

console.log('The Case Studies page contains ' + pageInfo.caseStudyCount() + ' case studies.');

pageInfo.title = 'A new title';

console.log(pageInfo.title);

delete pageInfo.title;

console.log(pageInfo.title);
```