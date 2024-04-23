import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user-id' })
const userCanInviteSomeoneElse = ability.can('invite', 'User')

console.log(userCanInviteSomeoneElse)
