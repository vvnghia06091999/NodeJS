const funA = async (test) => {
    console.log(test);
};

(async() => {
    await funA('Aaaa');
})();