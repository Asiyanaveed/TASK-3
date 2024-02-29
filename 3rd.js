var personName = "Asiya";
console.log("lowerCase:", personName.toLowerCase());
console.log("UpperCase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
