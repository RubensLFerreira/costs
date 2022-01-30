import styles from './Select.module.css'

function Select({ text, name, options, hanleOnChange, value}) {
  return(
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select type={name} id={name}>
        <option>Selecione uma opção</option>
      </select>
    </div>
  )
}

export default Select 