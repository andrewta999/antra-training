const names = [
  { userid: 2, name: "Velen" },
  { userid: 56, name: "Illidan" },
  { userid: 23, name: "Muradin" },
  { userid: 12, name: "Sylvanas" },
  { userid: 44, name: "Cenarius" },
  { userid: 4, name: "Gul'Dan" },
];

const roles = [
  { userid: 2, role: "Mage" },
  { userid: 4, role: "Worlock" },
  { userid: 56, role: "Demon Hunter" },
  { userid: 66, role: "Druid" },
  { userid: 87, role: "Shaman" },
  { userid: 12, role: "Hunter" },
];

function merge_roles(names, roles) {
  let res = [];
  let role_map = new Map();

  for (let role of roles) {
    role_map.set(role.userid, role.role);
  }

  for (let user of names) {
    let user_role = role_map.get(user.userid) || null;
    res.push({
      ...user,
      role: user_role,
    });
  }

  return res;
}

console.log(merge_roles(names, roles));

const callback1 = (a) => a + 2; // 6
const callback2 = (b) => b * 2; // 12
const callback3 = (c) => c - 2; // 10
function runAll(initNum) {
  return function (...args) {
    return args.reduce((prev, cb) => cb(prev), initNum);
  };
}
console.log(runAll(4)(callback1, callback2, callback3)); // 10

source = [
  ["Foley", "Chemicals", "CHEM"],
  ["Foley", "Chemicals", "CTO"],
  ["Foley", "Chemicals", "LK"],
  ["Foley", "Chemicals", "R8"],
  ["Foley", "Chemicals", "WT"],
  ["Foley", "Finishing", "LB2"],
  ["Foley", "Finishing", "LB4"],
  ["Foley", "Finishing", "RW1"],
  ["Foley", "Finishing", "RW2"],
  ["Foley", "Line 3", "LN3"],
  ["Foley", "Line 3", "Production Process"],
  ["Foley", "Line 4", "LN4"],
  ["Foley", "Line 4", "Prod Process"],
  ["Foley", "Mill General", "Wastewater Treatment"],
  ["Foley", "Powerhouse", "BB1"],
  ["Foley", "Powerhouse", "BB2"],
  ["Foley", "Powerhouse", "EV5"],
  ["Foley", "Powerhouse", "FWE"],
  ["Foley", "Powerhouse", "PB1"],
  ["Foley", "Powerhouse", "PB2"],
  ["Foley", "Powerhouse", "RB2"],
  ["Foley", "Powerhouse", "RB3"],
  ["Foley", "Powerhouse", "RB4"],
  ["Foley", "Powerhouse", "TG2"],
  ["Foley", "Powerhouse", "TG3"],
  ["Foley", "Powerhouse", "TG4"],
];
function change_data(source) {
  const res = [];

  for (let obj of source) {
    let curr = res;

    obj.forEach((ele, idx) => {
      let exist = curr.find((item) => item.name === ele);

      if (!exist) {
        exist = {
          name: ele,
          children: [],
        };
        curr.push(exist);
      }

      if (idx < obj.length - 1) {
        curr = exist.children;
      }
    });
  }

  return res;
}
//
console.log("\nOutput 3 => \n", JSON.stringify(change_data(source), null, 2));
