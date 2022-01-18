// Iteration 1: Names and Input
let hacker1 = "Mamoun Lazrak";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Filipa Natálio"
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
   console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`);
}
// Iteration 3: Loops
let driverNameInUpperCase = '';
for (letter of hacker1) {
    driverNameInUpperCase += letter.toUpperCase() + ' ';
}
console.log(driverNameInUpperCase);

let navigatorReverseName = '';
for (i = hacker2.length - 1; i >= 0; i--) {
    navigatorReverseName += hacker2[i];
}
console.log(navigatorReverseName);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) { 
    console.log("The navigator goes first definitely."); 
} else {
    console.log("What?! You both have the same name?");
}
// Bonus 1 
loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae consectetur neque. Integer dapibus leo lacus, vel commodo risus commodo et. Duis bibendum tortor congue purus dignissim luctus vel ac leo. Curabitur aliquet porta volutpat. Fusce erat mi, faucibus vel sollicitudin vel, auctor ac est. Sed eget rutrum velit. In vehicula nulla est, nec luctus elit tincidunt in. Pellentesque dignissim sem ut vehicula malesuada. In semper mi eget facilisis consequat. Proin eget condimentum lacus. Praesent ut leo tristique, pretium nibh a, volutpat felis. Phasellus volutpat lacinia luctus. In sit amet hendrerit nunc, quis tincidunt eros. Vivamus ligula nulla, semper vel neque at, cursus malesuada dui. Praesent est odio, molestie eu ipsum non, sagittis hendrerit magna. Vestibulum vehicula, sem eu luctus bibendum, turpis arcu faucibus urna, quis tincidunt urna elit ac massa. Quisque arcu urna, posuere et mattis sollicitudin, faucibus ut lectus. Suspendisse sed lorem vel lorem faucibus ullamcorper non nec elit. Praesent dolor sapien, tempus a tempus vitae, aliquam ornare diam. Morbi mattis, ligula et ultrices luctus, tortor ligula luctus enim, a fringilla dolor eros a lacus. Quisque ultricies feugiat elit. Curabitur vel auctor enim. Vivamus accumsan fermentum neque, dictum porttitor est dapibus ut. Donec pulvinar egestas leo vel efficitur. Sed porttitor luctus tincidunt. Donec at varius dolor, vel vestibulum risus. Vivamus interdum quam ante, vel feugiat diam tempor ut. Nulla facilisi. Mauris cursus leo vitae diam imperdiet, fermentum aliquam tortor tincidunt. Fusce at urna vitae erat consequat ultricies quis ac felis. Proin sodales justo lectus, eget ultrices urna sodales in. Vivamus neque turpis, pellentesque ut placerat at, commodo vel tellus. Nunc lacinia turpis a enim molestie hendrerit. Integer sit amet posuere justo. Proin viverra pulvinar tellus ac accumsan. Etiam feugiat enim vel eros eleifend, a rhoncus justo egestas. Ut eget dignissim lorem, sit amet sodales lectus. Quisque convallis cursus lectus. Proin id eros at ligula fringilla elementum. Maecenas consectetur rutrum ante at placerat. Aliquam aliquet leo eget turpis sagittis, placerat elementum arcu accumsan."
let nbOfWords = 0;
let nbOfEt = 0;
let words = loremIpsum.split(' ');
nbOfWords = words.length;
words.forEach( function(word) {
    if (word === 'et') {
        nbOfEt++;
    } else if (word === 'et,') {
        nbOfEt++;
    } else if (word === 'et.') {
        nbOfEt++;
    }
})
console.log(words);
console.log(nbOfEt);


