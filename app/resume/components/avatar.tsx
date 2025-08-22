import { Avatar } from '@base-ui-components/react/avatar';

export default function MyAvatar() {
  return (
    <Avatar.Root className='inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-gray-100 align-middle text-base font-medium text-black select-none'>
      <Avatar.Image
        src='/resume/me.jpeg'
        width='48'
        height='48'
        className='size-full object-cover'
      />
      <Avatar.Fallback className='flex size-full items-center justify-center text-base'>
        FJ
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
