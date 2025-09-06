import Image from 'next/image';

export default function RecordPage() {
  return (
    <div>
      <div className='p-6 md:w-[1024px] md:mx-auto flex flex-col md:flex-row gap-16'>
        <Image
          src='/record/xinai.jpeg'
          width={284}
          height={177}
          alt='Screenshots of xinai'
        />
        <div className='flex flex-col gap-4'>
          <p className='text-2xl font-bold'>你是我心爱的女人（汪峰）</p>
          <p className='text-sm'>作詞：汪峰     作曲：汪峰</p>
          <audio
            src={
              'https://fjin-songs.s3.us-east-1.amazonaws.com/xinai_090325.wav'
            }
            controls
          />
        </div>
      </div>
    </div>
  );
}
