import React from "react";

const DummyArray = () => {
  const dummyArray = [
    {
      name: "radialCode",
      dummarray: [
        {
          value: 1,
          category: [
            {
              name: "frontend",
              description: "lorem",
              values: [1, 2, 3, 4, 5, 5],
              image: "https://picsum.photos/id/237/200/300",
            },
            {
              name: "backend",
              description: "lorem",
              values: [1, 2, 3, 4, 5, 5],
              image: "https://picsum.photos/id/237/200/300",
            },
            {
              name: "Mobile App",
              description: "lorem",
              values: [1, 2, 3, 4, 5, 5],
              image: "https://picsum.photos/id/237/200/300",
            },
          ],
        },
      ],
    },
  ];
  const { dummarray } = dummyArray[0];
  const { category } = dummarray[0];

  // console.log(category);

  function print(val) {
    val.map((v) => {
      console.log(v.name);
      console.log(v.description);
      console.log(v.values);
      console.log(v.image);
    });
  }

  // print(category);

  const arr = [1, 2, 3, 5, 6, 7, 9];
  let missing = [];
  for (let i = 0; i <= 10; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }
  // console.log(missing);

  return <div>DummyArray</div>;
};

export default DummyArray;
