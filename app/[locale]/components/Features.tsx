import { useTranslations } from 'next-intl'
import {
  GlobalSearch,
  Profile2User,
  VideoPlay,
  KeyboardOpen,
  FolderOpen,
  PenTool2,
  EmptyWalletAdd,
  GlobalEdit,
} from 'iconsax-react'

export default function Features() {
  const t = useTranslations('Index')
  return (
    <div
      //ref={fSection}
      className="container mx-auto my-24 px-4 transition duration-500 md:mt-44"
    >
      <h2 className="mb-12 text-center text-main-color sm:text-xl md:mb-20 lg:text-2xl">
        {t('features.heading')}
      </h2>
      <div className="flex flex-wrap child:max-w-[170px] sm:child:max-w-[200px] justify-center lg:child:max-w-lg gap-x-8 gap-y-12">
        <div>
          <GlobalSearch
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t('features.seOptmization.subHeading')}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t('features.seOptmization.caption')}
            </p>
          </div>
        </div>
        <div>
          <Profile2User
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t('features.manageAccounts.subHeading')}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t('features.manageAccounts.caption')}
            </p>
          </div>
        </div>
        <div>
          <VideoPlay
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t('features.motionGraphic.subHeading')}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t('features.motionGraphic.caption')}
            </p>
          </div>
        </div>
        <div>
          <EmptyWalletAdd
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t('features.manageSponsors.subHeading')}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t('features.manageSponsors.caption')}
            </p>
          </div>
        </div>
        <div>
          <FolderOpen
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t('features.designIdentities.subHeading')}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t('features.designIdentities.caption')}
            </p>
          </div>
        </div>
        <div>
          <PenTool2
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t('features.graphicDesign.subHeading')}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t('features.graphicDesign.caption')}
            </p>
          </div>
        </div>
        <div>
          <GlobalEdit
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20 xl:h-24 xl:w-24"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t('features.writingContent.subHeading')}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t('features.writingContent.caption')}
            </p>
          </div>
        </div>
        <div>
          <KeyboardOpen
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20 xl:h-24 xl:w-24"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t('features.systems.subHeading')}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t('features.systems.caption')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
