import { InputBox } from 'components';

interface Prop {
  category: string;
  setCategory: Function;
}

export const Category = ({ category, setCategory }: Prop) => {
  const categoryList = [
    'Sneakers',
    'Boots',
    'Heels/Loafers',
    'Sandals/Slippers',
    'Etc'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <InputBox name="cateogory" title="Category">
      <select id="category" defaultValue="" required onChange={handleChange}>
        <option value="" disabled>
          Select the category.
        </option>
        {categoryList.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </InputBox>
  );
};
