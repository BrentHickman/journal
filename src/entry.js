export default function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countVowels = function(){
  const vowels = /[aeiou]/gi;
  if (!this.body.match(vowels)){
    return null;
  }
  else{
    return this.body.match(vowels).length;
  }
}

Entry.prototype.countConsonants = function(){
  const notVowels = /[^aeiou\W\d]/gi;
  if (!this.body.match(notVowels)){
    return null;
  }
  else{
    return this.body.match(notVowels).length;
  }

};

Entry.prototype.countWords = function(){
  const word = /\b\w+\b/gi;
  if (!this.body.match(word)){
    return null;
  }
  else{
    return this.body.match(word).length;
  }

};

Entry.prototype.getTeaser = function(){
  const teaser = /^(\w+\s){8}/gi;
  // const teaser = /^\w+\s*\w*\./gi;
  
  if (!this.body.match(teaser)){
    return null;
  }
  else{
    return this.body.match(teaser);
  }

};