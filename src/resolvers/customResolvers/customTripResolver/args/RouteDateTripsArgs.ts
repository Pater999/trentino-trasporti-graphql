import { ArgsType, Field, Int } from 'type-graphql'

@ArgsType()
export class RouteDateTripsArgs {
    @Field((type) => String, { nullable: false })
    routeId!: string

    @Field((type) => Date, { nullable: false })
    currentDate!: Date

    @Field((type) => Int, { nullable: true })
    take?: number | undefined

    @Field((type) => Int, { nullable: true })
    skip?: number | undefined
}
