const sortByTitle = (array) => {

    const result = array.toSorted((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

    return result; 
};

module.exports = { sortByTitle };