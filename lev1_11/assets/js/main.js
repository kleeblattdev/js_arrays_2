let array = [ "imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg" ];

array.splice(2,0, "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg")

console.log(array);

array.splice(length-1 ,0, "imageTeilnehmer014supercode.jpg", "imageTeilnehmer015supercode.jpg", "imageTeilnehmer016supercode.jpg", "imageTeilnehmer017supercode.jpg", "imageTeilnehmer018supercode.jpg", "imageTeilnehmer019supercode.jpg");

console.log(array);

array.splice(length-1,0, "imageTeilnehmer002supercode.jpg", "imageTeilnehmer003supercode.jpg", "imageTeilnehmer004supercode.jpg","imageTeilnehmer005supercode.jpg", "imageTeilnehmer006supercode.jpg", "imageTeilnehmer007supercode.jpg", "imageTeilnehmer011supercode.jpg", "imageTeilnehmer012supercode.jpg", "imageTeilnehmer013supercode.jpg")

array.sort();
console.log(array);

const copyImg1 = array.slice(7, 15);
console.log(copyImg1);

const copyImg2 = array.slice(6, 12);
console.log(copyImg2);