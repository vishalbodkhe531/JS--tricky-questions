const checkAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    console.log("Not Same Characters");
    return;
  }

  const sortStr1 = str1.split("").sort().join("");
  const sortStr2 = str2.split("").sort().join("");


  if (sortStr1 === sortStr2) {
    console.log("Same Characters (Anagram)");
  } else {
    console.log("Not Same Characters");
  }
};

checkAnagram("listen", "silent");
checkAnagram("aab", "aba");      
checkAnagram("aab", "ab");        
