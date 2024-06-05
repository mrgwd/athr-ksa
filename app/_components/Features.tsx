import {
  GlobalSearch,
  Profile2User,
  VideoPlay,
  KeyboardOpen,
  FolderOpen,
  PenTool2,
  EmptyWalletAdd,
  GlobalEdit,
  Mobile,
} from 'iconsax-react'
import Section from './Section'
import Feature from './Feature'

export default function Features() {
  return (
    <Section name="features">
      <div className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-4 sm:grid-cols-3 lg:gap-y-12 xl:gap-y-16">
        <Feature feature="features.seOptmization">
          <GlobalSearch variant="Bulk" />
        </Feature>

        <Feature feature="features.manageAccounts">
          <Profile2User variant="Bulk" />
        </Feature>

        <Feature feature="features.motionGraphic">
          <VideoPlay variant="Bulk" />
        </Feature>

        <Feature feature="features.manageSponsors">
          <EmptyWalletAdd variant="Bulk" />
        </Feature>

        <Feature feature="features.designIdentities">
          <FolderOpen variant="Bulk" />
        </Feature>

        <Feature feature="features.graphicDesign">
          <PenTool2 variant="Bulk" />
        </Feature>

        <Feature feature="features.writingContent">
          <GlobalEdit variant="Bulk" />
        </Feature>

        <Feature feature="features.systems">
          <KeyboardOpen variant="Bulk" />
        </Feature>

        <Feature feature="features.mobile">
          <Mobile variant="Bulk" />
        </Feature>
      </div>
    </Section>
  )
}
