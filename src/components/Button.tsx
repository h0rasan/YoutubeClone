import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';

const buttonStyle = cva(['hover:bg-secondary-hover', 'transition-colors'], {
  variants: {
    variant: {
      default: ['bg-secondary', 'hover:bg-secondary-hover'],
      ghost: ['hove:bg-gray-100'],
    },
    size: {
      default: ['rounded', 'p-2'],
      icon: [
        'rounded-full',
        'w-10',
        'h-10',
        'flex',
        'items-center',
        'justify-center',
        'p-2.5',
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ButtonProps = VariantProps<typeof buttonStyle> & ComponentProps<'button'>;

const Button = ({ variant, size, ...props }: ButtonProps) => {
  return <button {...props} className={buttonStyle({ variant, size })} />;
};

export default Button;
