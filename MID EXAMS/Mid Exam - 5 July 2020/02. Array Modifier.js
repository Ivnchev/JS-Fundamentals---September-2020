function foo(input) {
  let array = input.shift().split(' ').map(Number)
  const mapper = {
      'swap' : (a, b) => swap(a, b),
      'multiply' : (a, b) => { array[a] *= array[b] },
      'decrease' : (a, b) => { array = array.map(x => x - 1)},
  }
  input.slice(0 , input.indexOf('end')).forEach(x => {
      let [command, a, b] = x.split(' ').map(x => isNaN(x) ? x : Number(x))
      mapper[command](a,b)
  });
  function swap(m, n) {
      let c = array[n]
      array.splice(n, 1, array[m])
      array.splice(m, 1, c)
  }
  console.log(array.join(', '));
}

foo([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);
foo([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]);