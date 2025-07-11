from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('employees', views.EmployeeViewset , basename='employee')


urlpatterns = [
    path('students/', views.studentView),
    path('student/<int:pk>', views.studentDetailView),

    # path('employee/', views.Employees.as_view()),
    # path('employees/<int:pk>', views.EmployeeDetail.as_view()),

    path('', include(router.urls)),


    path('blogs/', views.BlogsView.as_view()),
    path('comments/', views.CommentsView.as_view()),
]
