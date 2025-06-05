function removeDuplicates(input: string): string {
  const words = input.split(',');

  const setWords = new Set(words);

  return [...setWords].join(',');
}

console.log(removeDuplicates('кошка,собака,лошадь,корова,кошка'));
