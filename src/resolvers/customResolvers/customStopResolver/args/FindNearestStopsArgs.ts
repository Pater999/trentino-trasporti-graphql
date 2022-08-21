import { ArgsType, Field, Float } from 'type-graphql'

@ArgsType()
export class FindNearestStopsArgs {
    @Field((type) => Float, { nullable: false })
    longitude!: number

    @Field((type) => Float, { nullable: false })
    latitude!: number

    @Field((type) => Float, { defaultValue: 1 })
    radius!: number
}
