// import styles from './MBTISelect.module.css';

// // const optionGroups = [
// //   [
// //     { value: "E", label: "외향형" },
// //     { value: "I", label: "내향형" },
// //   ],
// //   [
// //     { value: "S", label: "감각형" },
// //     { value: "N", label: "직관형" },
// //   ],
// //   [
// //     { value: "T", label: "사고형" },
// //     { value: "F", label: "감정형" },
// //   ],
// //   [
// //     { value: "J", label: "판단형" },
// //     { value: "P", label: "인식형" },
// //   ],
// // ];
// const optionGroups = [
//   { value: 'E', label: '외향형' },
//   { value: 'I', label: '내향형' },
//   { value: 'S', label: '감각형' },
//   { value: 'N', label: '직관형' },
//   { value: 'T', label: '사고형' },
//   { value: 'F', label: '감정형' },
//   { value: 'J', label: '판단형' },
//   { value: 'P', label: '인식형' },
// ];

// function MBTIOption({ value, label, onClick, selected }) {
//   const classNames = `${styles.mbtiOption} ${selected ? styles.selected : ''}`;
//   return (
//     <div className={classNames} onClick={onClick}>
//       <span className={styles.char}>{value}</span>
//       {label}
//       {/* <input type="hidden" value={value} /> */}
//     </div>
//   );
// }

// function MBTIOptionGroup({ options, onChange, value }) {
//   return (
//     <div className={styles.mbtiOptionGroup}>
//       {options.map((option) => (
//         <MBTIOption
//           key={option.value}
//           label={option.label}
//           selected={option.value === value}
//           value={option.value}
//           onClick={(e) => {
//             // console.log(e.target.lastChild.value);
//             onChange(option.value);
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// export default function MBTISelect({ value = 'ESFP', onChange }) {
//   const handleChangeAt = (val, position) => {
//     const nextValue =
//       value.slice(0, position) + val + value.slice(position + 1);
//     onChange(nextValue);
//   };
//   return (
//     <div>
//       {optionGroups.map((options, index) => (
//         <MBTIOptionGroup
//           key={`${options[0].value}-${options[1].value}`}
//           options={options}
//           value={value[index]}
//           onChange={(val) => handleChangeAt(val, index)}
//         />
//       ))}
//     </div>
//   );
// }

import React from 'react';
import styles from './MBTISelect.module.css';

const mbtiArr = [
  { mbti: 'I', desc: '내향형', groupNum: 0 },
  { mbti: 'E', desc: '외향형', groupNum: 0 },
  { mbti: 'N', desc: '직관형', groupNum: 1 },
  { mbti: 'S', desc: '감각형', groupNum: 1 },
  { mbti: 'T', desc: '사고형', groupNum: 2 },
  { mbti: 'F', desc: '감정형', groupNum: 2 },
  { mbti: 'J', desc: '판단형', groupNum: 3 },
  { mbti: 'P', desc: '인식형', groupNum: 3 },
];

function MBTIOption({ option, handleChange, selected }) {
  const { mbti, desc, groupNum } = option;
  const handleMbtiClick = () => {
    handleChange(groupNum, option.mbti)
  };
  return (
    <div className={`${styles.mbtiOption} ${selected ? styles.selected : ""}`} onClick={handleMbtiClick}>
      <span className={styles.mbtiChar}>{mbti}</span>
      {desc}
    </div>
  );
}

function MBTISelect({ onChange, value }) {
  const handleChange = (selectedGroupNum, selectedValue) => {
    if(value[selectedGroupNum] !== selectedValue) {
      const nextValue =
      value.slice(0, selectedGroupNum) + selectedValue + value.slice(selectedGroupNum + 1);
      onChange(nextValue);
    }
  }
  return (
    <div className={styles.mbtiOptions}>
      {mbtiArr.map((option, idx) => {
        return (
          <MBTIOption
            key={idx}
            option={option}
            idx={idx + 1}
            handleChange={handleChange}
            value={value}
            selected={value[option.groupNum] == option.mbti}
          />
        );
      })}
    </div>
  );
}

export default MBTISelect;
