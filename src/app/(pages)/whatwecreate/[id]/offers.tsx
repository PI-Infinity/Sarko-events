"use client";
import { useAppContext } from "@/context/app";
import { useEffect } from "react";
import { MdDone } from "react-icons/md";

const Offers = ({ type }: any) => {
  const { theme, loading, language } = useAppContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const item = texts && texts.find((i: any) => i.value === type);

  return (
    <div
      style={{ display: loading ? "none" : "flex", color: theme.text }}
      className="w-full desktop:py-12 desktop:pt-4 py-6 pt-2"
    >
      <div className="w-[100%] p-4 px-[5%] desktop:px-24 flex flex-col items-center gap-6">
        <div className="w-full flex flex-col gap-16">
          {
            <div className="flex gap-24 items-center px-2">
              <div className="flex flex-col gap-4">
                <strong className="text-2xl desktop:my-6">
                  {language === "en"
                    ? item?.title.en
                    : language === "ka"
                    ? item?.title.ka
                    : item?.title.ru}
                </strong>
                <ul
                  className="grid desktop:grid-cols-2 gap-2"
                  style={{ listStyleType: "circle" }}
                >
                  {item?.subtitles?.map((i: any, x: number) => {
                    return (
                      <div key={x} className="font-custom mr-16 w-full">
                        <div className="flex gap-2 items-center text-md italic">
                          <div
                            className="h-2 w-2 rounded-full"
                            style={{ background: theme.text }}
                          />
                          {i[language]}
                        </div>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Offers;

const texts = [
  {
    title: { en: "Weddings", ru: "Свадьбы", ka: "ქორწილები" },
    img: "/weddings.png",
    value: "weddings",
    subtitles: [
      {
        en: "Venue selection and booking",
        ru: "Выбор и бронирование места",
        ka: "ადგილის შერჩევა და დაჯავშნა",
      },
      {
        en: "Theme and decoration design",
        ru: "Дизайн темы и декораций",
        ka: "თემატიკის და დეკორაციის დიზაინი",
      },
      {
        en: "Menu selection and catering",
        ru: "Выбор меню и кейтеринг",
        ka: "მენიუს შერჩევა და კულინარული მომსახურება",
      },
      {
        en: "Music and entertainment planning",
        ru: "Планирование музыки и развлечений",
        ka: "მუსიკის და გასართობი პროგრამის დაგეგმვა",
      },
      {
        en: "Photo and video shooting",
        ru: "Фото и видеосъемка",
        ka: "ფოტო და ვიდეო გადაღება",
      },
      {
        en: "Transportation organization",
        ru: "Организация транспорта",
        ka: "ტრანსპორტირების ორგანიზება",
      },
      {
        en: "Wedding rings and stationery",
        ru: "Свадебные кольца и канцелярские принадлежности",
        ka: "ქორწილის ბეჭდები და საკანცელარიო ნივთები",
      },
      { en: "Other...", ru: "Другое...", ka: "სხვა..." },
    ],
  },
  {
    img: "/corporation.jpg",
    value: "corporations",
    title: {
      en: "Corporate event",
      ru: "Корпоративное мероприятие",
      ka: "კორპორატიული ღონისძიება",
    },
    subtitles: [
      {
        en: "Location selection and booking",
        ru: "Выбор и бронирование места",
        ka: "ადგილმდებარეობის არჩევა და დაჯავშნა",
      },
      {
        en: "Event theme and decoration",
        ru: "Тема и декорации мероприятия",
        ka: "ღონისძიების თემატიკა და დეკორაცია",
      },
      {
        en: "Technical equipment",
        ru: "Техническое оборудование",
        ka: "ტექნიკური აღჭურვილობა",
      },
      {
        en: "Catering",
        ru: "Кейтеринг",
        ka: "ქეითერინგი",
      },
      {
        en: "Entertainment programs",
        ru: "Развлекательные программы",
        ka: "გასართობი პროგრამები",
      },
      {
        en: "Personnel provision",
        ru: "Обеспечение персоналом",
        ka: "პერსონალის უზრუნველყოფა",
      },
      {
        en: "Transportation",
        ru: "Транспорт",
        ka: "ტრანსპორტირება",
      },
      {
        en: "Photo and video shooting",
        ru: "Фото и видеосъемка",
        ka: "ფოტო და ვიდეო გადაღება",
      },
      {
        en: "Social media and marketing support",
        ru: "Поддержка в социальных сетях и маркетинг",
        ka: "სოციალური მედიის და მარკეტინგის მხარდაჭერა",
      },
      {
        en: "Inviting honorary guests and speakers",
        ru: "Приглашение почетных гостей и спикеров",
        ka: "საპატიო სტუმრების და სპიკერების დაპატიჟება",
      },
      {
        en: "Budgeting and financial management",
        ru: "Бюджетирование и финансовое управление",
        ka: "ბიუჯეტირება და ფინანსური მენეჯმენტი",
      },
      {
        en: "Event management and coordination",
        ru: "Управление и координация мероприятия",
        ka: "ღონისძიების მართვა და კოორდინაცია",
      },
      { en: "Other...", ru: "Другое...", ka: "სხვა..." },
    ],
  },
  {
    img: "/presentation.png",
    value: "presentations",
    title: {
      en: "Company/Product presentation",
      ru: "Презентация компании/продукта",
      ka: "კომპანიის/პროდუქტის პრეზენტაცია",
    },
    subtitles: [
      {
        en: "Presentation design and formatting",
        ru: "Дизайн и форматирование презентации",
        ka: "პრეზენტაციის დიზაინი და ფორმატირება",
      },
      {
        en: "Content creation for presentation",
        ru: "Создание контента для презентации",
        ka: "პრეზენტაციის კონტენტის შექმნა",
      },
      {
        en: "Visual and video materials",
        ru: "Визуальные и видеоматериалы",
        ka: "ვიზუალური და ვიდეო მასალები",
      },
      {
        en: "Presentation rehearsal and speaker preparation",
        ru: "Репетиция презентации и подготовка спикера",
        ka: "პრეზენტაციის რეპეტიცია და სპიკერის მომზადება",
      },
      {
        en: "Technical equipment and support",
        ru: "Техническое оборудование и поддержка",
        ka: "ტექნიკური აღჭურვილობა და მხარდაჭერა",
      },
      {
        en: "Location selection and organization",
        ru: "Выбор и организация места",
        ka: "ადგილმდებარეობის შერჩევა და ორგანიზაცია",
      },
      {
        en: "Design of invitations and informational materials",
        ru: "Дизайн приглашений и информационных материалов",
        ka: "მოსაწვევების და ინფორმაციული მასალების დიზაინი",
      },
      {
        en: "Event management and coordination",
        ru: "Управление и координация мероприятия",
        ka: "ღონისძიების მართვა და კოორდინაცია",
      },
      {
        en: "Social media and marketing support",
        ru: "Поддержка в социальных сетях и маркетинг",
        ka: "სოციალური მედიის და მარკეტინგის მხარდაჭერა",
      },
      {
        en: "Evaluation and feedback",
        ru: "Оценка и обратная связь",
        ka: "შეფასება და უკუკავშირი",
      },
      { en: "Other...", ru: "Другое...", ka: "სხვა..." },
    ],
  },
  {
    img: "/corporation.jpg",
    value: "conferences",
    title: { en: "Conference", ru: "Конференция", ka: "კონფერენცია" },
    subtitles: [
      {
        en: "Theme and program development",
        ru: "Разработка темы и программы",
        ka: "თემატიკა და პროგრამის შემუშავება",
      },
      {
        en: "Speech and speaker invitations",
        ru: "Приглашение спикеров и выступающих",
        ka: "სიტყვით გამოსვლები და სპიკერების დაპატიჟება",
      },
      {
        en: "Location selection and booking",
        ru: "Выбор и бронирование места",
        ka: "ადგილმდებარეობის შერჩევა და დაჯავშნა",
      },
      {
        en: "Registration and participant management",
        ru: "Регистрация и управление участниками",
        ka: "რეგისტრაცია და მონაწილეთა მართვა",
      },
      {
        en: "Logistics and transportation",
        ru: "Логистика и транспорт",
        ka: "ლოჯისტიკა და ტრანსპორტირება",
      },
      {
        en: "Hotel booking and accommodation",
        ru: "Бронирование отелей и размещение",
        ka: "სასტუმროების დაჯავშნა და განთავსება",
      },
      {
        en: "Catering and food services",
        ru: "Кейтеринг и услуги питания",
        ka: "კატერინგი და კვების სერვისები",
      },
      {
        en: "Marketing and promotion",
        ru: "Маркетинг и продвижение",
        ka: "მარკეტინგი და პრომოუშენი",
      },
      {
        en: "Social activities and networking events",
        ru: "Социальные мероприятия и нетворкинг",
        ka: "სოციალური აქტივობები და ქსელური შეხვედრები",
      },
      {
        en: "Technical support and innovations",
        ru: "Техническая поддержка и инновации",
        ka: "ტექნიკური მხარდაჭერა და ინოვაციები",
      },
      {
        en: "Decoration and design",
        ru: "Декорации и дизайн",
        ka: "დეკორაცია და დიზაინი",
      },
      {
        en: "Photo and video services",
        ru: "Фото- и видеосъемка",
        ka: "ფოტო და ვიდეო მომსახურება",
      },
      {
        en: "Feedback and evaluation",
        ru: "Обратная связь и оценка",
        ka: "უკუკავშირი და შეფასება",
      },
      { en: "Other...", ru: "Другое...", ka: "სხვა..." },
    ],
  },
  {
    img: "/teambuilding.jpg",
    value: "teambuildings",
    title: { en: "Teambuilding", ru: "Тимбилдинг", ka: "თიმბილდინგი" },
    subtitles: [
      {
        en: "Thematic teambuilding activities",
        ru: "Тематические тимбилдинговые мероприятия",
        ka: "თემატური თიმბილდინგის აქტივობები",
      },
      {
        en: "Team projects and tasks",
        ru: "Командные проекты и задания",
        ka: "გუნდური პროექტები და დავალებები",
      },
      {
        en: "Seminars and trainings",
        ru: "Семинары и тренинги",
        ka: "სემინარები და ტრენინგები",
      },
      {
        en: "Environmental and social activities",
        ru: "Экологические и социальные мероприятия",
        ka: "გარემოსდაცვითი და სოციალური აქტივობები",
      },
      {
        en: "Creative activities",
        ru: "Творческие мероприятия",
        ka: "შემოქმედებითი აქტივობები",
      },
      {
        en: "Culinary activities",
        ru: "Кулинарные мероприятия",
        ka: "კულინარიული აქტივობები",
      },
      {
        en: "Adventure and quest games",
        ru: "Приключенческие и квестовые игры",
        ka: "სათავგადასავლო და საძიებო თამაშები",
      },
      {
        en: "Special night activities",
        ru: "Специальные ночные мероприятия",
        ka: "სპეციალური ღამის აქტივობები",
      },
      {
        en: "City activities",
        ru: "Городские мероприятия",
        ka: "ქალაქის აქტივობები",
      },
      {
        en: "Company branding and promotion",
        ru: "Брендинг и продвижение компании",
        ka: "კომპანიის ბრენდინგი და პრომოუშენი",
      },
      {
        en: "Feedback and results analysis",
        ru: "Обратная связь и анализ результатов",
        ka: "უკუკავშირი და შედეგების ანალიზი",
      },
      { en: "Other...", ru: "Другое...", ka: "სხვა..." },
    ],
  },
  {
    img: "/corporation.jpg",
    value: "other",
    title: { en: "Other...", ru: "Другое...", ka: "სხვა..." },
    subtitles: [],
  },
];
