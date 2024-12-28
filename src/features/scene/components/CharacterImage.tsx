import { cn } from '@/utils/ui/cn'

type Props = {
    name: string
    isUserRole: boolean
}

/** The fake character image */
export function CharacterImage({ name, isUserRole }: Props) {
    return (
        <div
            className={cn(
                'flex items-center justify-center w-8 h-8 rounded-full  text-white',
                isUserRole ? 'bg-green-500' : 'bg-blue-500'
            )}
        >
            {name.charAt(0).toUpperCase()}
        </div>
    )
}
