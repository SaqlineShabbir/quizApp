export default function Checkbox({ className, text, ...rest }) {
  return (
    <label>
      <input type="checkbox" /> <span className="text-white">First Option</span>
    </label>
  );
}
