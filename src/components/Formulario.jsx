'use client';
import { useForm } from 'react-hook-form';

const Formulario = () => {
   const {
     register,
     formState: { errors },
     handleSubmit,
   } = useForm();
   const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col justify-between h-auto'
      >
        <input
          {...register('firstName', { required: true })}
          aria-invalid={errors.firstName ? 'true' : 'false'}
        />
        {errors.firstName?.type === 'required' && (
          <p role='alert'>First name is required</p>
        )}
        
        <select {...register('gender')}>
          <option value='female'>female</option>
          <option value='male'>male</option>
        </select>
        {errors.gender?.type === 'required' && (
          <p role='firstName'>gender name is required</p>
        )}

        <select {...register('city')}>
          <option value='cordoba'>cordoba</option>
          <option value='bs as'>bs as</option>
          <option value='bogota'>bogota</option>
          <option value='lima'>lima</option>
        </select>
        {errors.gender?.type === 'required' && (
          <p role='city'>city name is required</p>
        )}
        <input type='submit' />
      </form>
    </div>
  );
};

export default Formulario;
