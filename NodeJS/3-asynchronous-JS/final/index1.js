const fs = require('fs');
const superagent = require('superagent');

const readFilePR = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      resolve(data);
    });
  });
};
const writeFilePR = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return reject(`couldn't write file ${err}`);
      resolve('success--');
    });
  });
};

const getDocPic = async () => {
  try {
    const dogBreed = await readFilePR(`${__dirname}/dog.txt`);
    console.log(dogBreed);
    const data = await superagent.get(
      `https://dog.ceo/api/breed/${dogBreed}/images/random`
    );
    console.log(data.body.message);

    await writeFilePR('./dog-img.txt', data.body.message);
  } catch (error) {
    console.log('error', error.message);
    throw error.message;
  }
  return ' success all';
};

(async () => {
  try {
    console.log('1: Will get dog pics!');
    const result = await getDocPic();
    console.log(result);
    console.log('3: Done getting dog pics!');
  } catch (error) {
    console.log('Boom error ', error);
  }
})();
