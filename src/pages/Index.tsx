import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

import Icon from "@/components/ui/icon";

type UserRole = "admin" | "student" | null;

const Index = () => {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: "Математика",
      time: "10:00",
      teacher: "Иванов И.И.",
      room: "204",
    },
    {
      id: 2,
      title: "Физика",
      time: "11:30",
      teacher: "Петрова С.А.",
      room: "301",
    },
    {
      id: 3,
      title: "Химия",
      time: "13:00",
      teacher: "Сидоров П.П.",
      room: "102",
    },
  ]);
  const [newLesson, setNewLesson] = useState({
    title: "",
    time: "",
    teacher: "",
    room: "",
  });

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
  };

  const handleAddLesson = () => {
    if (newLesson.title && newLesson.time) {
      setLessons([...lessons, { ...newLesson, id: Date.now() }]);
      setNewLesson({ title: "", time: "", teacher: "", room: "" });
    }
  };

  if (!userRole) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center space-y-1">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Образовательная платформа
            </CardTitle>
            <CardDescription className="text-gray-600">
              Войдите в систему для продолжения
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@edu.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button
                onClick={() => handleLogin("admin")}
                className="h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium"
              >
                <Icon name="Shield" size={18} className="mr-2" />
                Админ
              </Button>
              <Button
                onClick={() => handleLogin("student")}
                variant="outline"
                className="h-11 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
              >
                <Icon name="User" size={18} className="mr-2" />
                Студент
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (userRole === "admin") {
    return (
      <div className="min-h-screen bg-slate-50">
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={18} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Панель администратора
                </h1>
                <p className="text-sm text-gray-600">Управление расписанием</p>
              </div>
            </div>
            <Button
              onClick={() => setUserRole(null)}
              variant="outline"
              size="sm"
              className="text-gray-600 hover:text-gray-900"
            >
              <Icon name="LogOut" size={16} className="mr-2" />
              Выйти
            </Button>
          </div>
        </header>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Plus" size={20} className="mr-2 text-blue-600" />
                  Добавить занятие
                </CardTitle>
                <CardDescription>
                  Создание нового урока в расписании
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Название предмета</Label>
                  <Input
                    id="title"
                    placeholder="Математика"
                    value={newLesson.title}
                    onChange={(e) =>
                      setNewLesson({ ...newLesson, title: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="time">Время</Label>
                    <Input
                      id="time"
                      type="time"
                      value={newLesson.time}
                      onChange={(e) =>
                        setNewLesson({ ...newLesson, time: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="room">Кабинет</Label>
                    <Input
                      id="room"
                      placeholder="204"
                      value={newLesson.room}
                      onChange={(e) =>
                        setNewLesson({ ...newLesson, room: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teacher">Преподаватель</Label>
                  <Input
                    id="teacher"
                    placeholder="Иванов И.И."
                    value={newLesson.teacher}
                    onChange={(e) =>
                      setNewLesson({ ...newLesson, teacher: e.target.value })
                    }
                  />
                </div>
                <Button
                  onClick={handleAddLesson}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить занятие
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Calendar"
                    size={20}
                    className="mr-2 text-blue-600"
                  />
                  Расписание занятий
                </CardTitle>
                <CardDescription>Список запланированных уроков</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="p-4 border border-gray-200 rounded-lg bg-gray-50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">
                          {lesson.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="text-blue-600 border-blue-200"
                        >
                          {lesson.time}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 space-x-4">
                        <span className="flex items-center">
                          <Icon name="User" size={14} className="mr-1" />
                          {lesson.teacher}
                        </span>
                        <span className="flex items-center">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          Каб. {lesson.room}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" size={18} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Студенческая панель
              </h1>
              <p className="text-sm text-gray-600">
                Просмотр расписания занятий
              </p>
            </div>
          </div>
          <Button
            onClick={() => setUserRole(null)}
            variant="outline"
            size="sm"
            className="text-gray-600 hover:text-gray-900"
          >
            <Icon name="LogOut" size={16} className="mr-2" />
            Выйти
          </Button>
        </div>
      </header>

      <div className="p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Calendar"
                    size={20}
                    className="mr-2 text-blue-600"
                  />
                  Календарь
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 border rounded-lg bg-white">
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
                      <div
                        key={day}
                        className="text-center text-sm font-medium text-gray-500 p-2"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 35 }, (_, i) => {
                      const date = new Date();
                      const firstDay = new Date(
                        date.getFullYear(),
                        date.getMonth(),
                        1,
                      );
                      const startDate = new Date(firstDay);
                      startDate.setDate(
                        startDate.getDate() - firstDay.getDay() + 1,
                      );
                      const currentDate = new Date(startDate);
                      currentDate.setDate(currentDate.getDate() + i);
                      const isCurrentMonth =
                        currentDate.getMonth() === date.getMonth();
                      const isToday =
                        currentDate.toDateString() === date.toDateString();
                      const isSelected =
                        selectedDate &&
                        currentDate.toDateString() ===
                          selectedDate.toDateString();

                      return (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(currentDate)}
                          className={`
                            p-3 text-center text-sm rounded-lg transition-colors
                            ${isCurrentMonth ? "text-gray-900" : "text-gray-400"}
                            ${isToday ? "bg-blue-600 text-white font-semibold" : ""}
                            ${isSelected && !isToday ? "bg-blue-100 text-blue-900" : ""}
                            ${!isToday && !isSelected ? "hover:bg-gray-100" : ""}
                          `}
                        >
                          {currentDate.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-2 text-blue-600" />
                  Расписание на сегодня
                </CardTitle>
                <CardDescription>
                  {selectedDate?.toLocaleDateString("ru-RU", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="p-6 border-l-4 border-l-blue-600 bg-blue-50 rounded-r-lg"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {lesson.title}
                        </h3>
                        <div className="flex items-center text-blue-600 font-medium">
                          <Icon name="Clock" size={16} className="mr-1" />
                          {lesson.time}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Icon
                            name="User"
                            size={16}
                            className="mr-2 text-gray-400"
                          />
                          <span>{lesson.teacher}</span>
                        </div>
                        <div className="flex items-center">
                          <Icon
                            name="MapPin"
                            size={16}
                            className="mr-2 text-gray-400"
                          />
                          <span>Кабинет {lesson.room}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
