import styles from './ControlForms.module.css'


export const ControlForms = Element => ({ input, meta, ...props }) => {
    const hasErr = meta.touched && meta.error;
    return (
        <div className={(hasErr ? styles.error : "") }>
            <Element {...input} {...props} />
            { hasErr && <span> { meta.error } </span> }
        </div>
    );
};
export const Textarea = ControlForms("textarea");

export const Input = ControlForms("input");
